import React, { useEffect, useRef, useState } from 'react';
import './index.scss';

interface OptionType {
  value: string | number;
  label: string;
  disabled?: boolean;
}

type ModeType = 'single' | 'multiple';
type SelectValueType = string | number | (string | number)[];

interface SelectProps {
  options?: OptionType[];
  value?: SelectValueType;
  onChange: (value: SelectValueType) => void;
  mode?: ModeType;
  placeholder?: string;
  disabled?: boolean;
  showSearch?: boolean;
  style?: React.CSSProperties;
}

const Select = ({
  options = [],
  value,
  onChange,
  mode = 'single',
  placeholder = '请选择',
  disabled = false,
  showSearch = false,
  style = {},
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState<SelectValueType>(
    value || '',
  );
  const [searchValue, setSearchValue] = useState('');
  const wrapperRef = useRef(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase()),
  );

  useEffect(() => {
    if (value !== currentValue) {
      setCurrentValue(value || '');
    }
  }, [value]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      typeof wrapperRef.current === 'object' &&
      wrapperRef.current !== null &&
      typeof (wrapperRef.current as HTMLElement).contains === 'function' &&
      !(wrapperRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (selectedValue: SelectValueType) => {
    if (mode === 'single') {
      onChange && onChange(selectedValue);
      setCurrentValue(selectedValue);
      setIsOpen(false);
    } else {
      const isArray = Array.isArray(currentValue);
      const isSelected =
        isArray &&
        (Array.isArray(selectedValue)
          ? selectedValue.some((val) => currentValue.includes(val))
          : currentValue.includes(selectedValue));
      const newValue = isArray
        ? isSelected
          ? currentValue.filter((val: string | number) => val !== selectedValue)
          : [...currentValue, selectedValue]
        : [selectedValue];

      if (Array.isArray(newValue)) {
        onChange && onChange([...newValue].flat());
      } else {
        onChange && onChange(newValue);
      }
      if (Array.isArray(newValue)) {
        setCurrentValue([...newValue].flat());
      } else {
        setCurrentValue(newValue);
      }
    }
  };

  const renderSelected = (): React.ReactNode => {
    if (mode === 'single') {
      return (
        options.find((opt) => opt.value === currentValue)?.label || placeholder
      );
    }

    return Array.isArray(currentValue)
      ? currentValue.map((val: string | number) => {
          const option = options.find((opt) => opt.value === val);
          return (
            option && (
              <span
                key={val}
                className="tag-item"
                onClick={(e) => e.stopPropagation()}
              >
                {option.label}
                <span className="close-icon" onClick={() => handleSelect(val)}>
                  ×
                </span>
              </span>
            )
          );
        })
      : placeholder;
  };

  return (
    <div
      className={`select-container ${disabled ? 'disabled' : ''} ${
        isOpen ? 'active' : ''
      }`}
      style={style}
      ref={wrapperRef}
    >
      <div
        className={`select-input ${isOpen ? 'active' : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        {renderSelected()}
      </div>

      <div className={`select-dropdown ${isOpen ? 'show' : ''}`}>
        {showSearch && (
          <div className="search-input">
            <input
              type="text"
              placeholder="搜索"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        )}

        <div className="option-list">
          {filteredOptions.map((option) => (
            <div
              key={option.value}
              className={`option-item 
                ${
                  (
                    mode === 'single'
                      ? currentValue === option.value
                      : Array.isArray(currentValue)
                      ? currentValue.includes(option.value)
                      : false
                  )
                    ? 'selected'
                    : ''
                }
                ${option.disabled ? 'disabled' : ''}`}
              onClick={() => !option.disabled && handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
