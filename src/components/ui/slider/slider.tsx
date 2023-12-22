import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect } from 'react'

import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'

const Slider = forwardRef<
  ElementRef<typeof RadixSlider.Root>,
  Omit<ComponentPropsWithoutRef<typeof RadixSlider.Root>, 'value'> & {
    value?: (number | undefined)[]
  }
>(({ className, max, onValueChange, value, ...props }, ref) => {
  useEffect(() => {
    if (value?.[1] === undefined || value?.[1] === null) {
      onValueChange?.([value?.[0] ?? 0, max ?? 0])
    }
  }, [max, value, onValueChange])

  return (
    <div className={s.slider}>
      <span className={s.value}>{value?.[0]}</span>
      <RadixSlider.Root
        className={s.root}
        max={max}
        onValueChange={onValueChange}
        ref={ref}
        {...props}
        value={[value?.[0] ?? 0, value?.[1] ?? max ?? 0]}
      >
        <RadixSlider.Track className={s.track}>
          <RadixSlider.Range className={s.range} />
        </RadixSlider.Track>
        <RadixSlider.Thumb className={s.thumb} />
        <RadixSlider.Thumb className={s.thumb} />
      </RadixSlider.Root>
      <span className={s.value}>{value?.[1]}</span>
    </div>
  )
})

Slider.displayName = RadixSlider.Root.displayName

export { Slider }
