'use client'

import { LayoutGroup, motion } from 'motion/react'
import { useState } from 'react'

type IndicatorProps = {
  layoutId: string
}

const Indicator = ({ layoutId }: IndicatorProps) => (
  <motion.span
    layoutId={layoutId}
    className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-md bg-white"
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  />
)

const Layout = () => {
  const [active, setActive] = useState(1)

  return (
    <div className="flex h-screen w-full flex-col items-center bg-background py-20">
      <h1 className="pb-20 text-[38px] font-semibold leading-[38px] tracking-[-1.5px]">Layout Animations with Hover</h1>

      {/* Tab Navigation */}
      <LayoutGroup id="tabs">
        <motion.div className="relative mb-8 flex items-center">
          <motion.div
            onClick={() => setActive(1)}
            className="relative box-border w-[240px] cursor-pointer rounded-md border border-border py-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {active === 1 && <Indicator layoutId="tab-underline" />}
            <div className="text-center">Tab 1</div>
          </motion.div>
          <motion.div
            onClick={() => setActive(2)}
            className="relative box-border w-[240px] cursor-pointer rounded-md border border-border py-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {active === 2 && <Indicator layoutId="tab-underline" />}
            <div className="text-center">Tab 2</div>
          </motion.div>
          <motion.div
            onClick={() => setActive(3)}
            className="relative box-border w-[240px] cursor-pointer rounded-md border border-border py-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {active === 3 && <Indicator layoutId="tab-underline" />}
            <div className="text-center">Tab 3</div>
          </motion.div>
        </motion.div>
      </LayoutGroup>

      {/* Grid Layout Example */}
      <div className="mt-12">
        <h2 className="mb-6 text-center text-2xl font-semibold">Grid Layout Animation</h2>
        <motion.div className="grid max-w-4xl grid-cols-3 gap-4" layout>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              layout
              className="cursor-pointer rounded-lg border border-border bg-card p-4"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                layout: { duration: 0.3 }
              }}
            >
              <motion.h4 layout="position" className="mb-2 font-semibold">
                Grid Item {item}
              </motion.h4>
              <motion.p layout="position" className="text-sm text-muted-foreground">
                This item animates smoothly when the layout changes
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Layout
