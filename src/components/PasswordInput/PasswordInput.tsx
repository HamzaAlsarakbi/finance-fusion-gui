import { Input, InputProps } from '@nextui-org/react';
import { useState } from 'react';
import { EyeSlashFilledIcon } from '@/components/icons/EyeSlashFilledIcon';
import { EyeFilledIcon } from '@/components/icons/EyeFilledIcon';

export const PasswordInput = (props: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Input
      type={isVisible ? 'text' : 'password'}
      label="Password"
      className="max-w-xs"
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      {...props}
    />
  );
};
