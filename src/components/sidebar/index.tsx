'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { menuOptions } from '@/lib/constants'
import clsx from 'clsx'
import Image from 'next/image'
  

type Props = {}

const Sidebar = (children: Props) => {
    const pathName = usePathname();
  return (
    <nav className='dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2'>
        <div className='flex items-center justify-center flex-col gap-8'>
            <Link href={'/'} className='flex font-bold flex-row'><aside className="flex items-center gap-[2px]">
				<p className="text-2xl font-bold">Fu</p>
				<Image
					src={"/fuzzieLogo.png"}
					width={12}
					height={12}
					alt="Fuzzie Logo"
					className="shadow-sm"
				/>
				<p className="text-2xl font-bold">zie</p>
			</aside></Link>
            <TooltipProvider>
                {menuOptions.map((menuItem) => (
                    <ul key={menuItem.name}>
                        <Tooltip delayDuration={0}>
                            <TooltipTrigger>
                                <li>
                                    <Link href={menuItem.href} className={clsx('group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer', {
                                        'dark:bg-[#2F006B] bg-[#EEE0FF]' : pathName === menuItem.href,
                                    })}>
                                        <menuItem.Component selected={pathName === menuItem.href} />
                                    </Link>
                                </li>
                            </TooltipTrigger>
                        </Tooltip>
                    </ul>
                ))}
            </TooltipProvider>
        </div>
    </nav>
  )
}

export default Sidebar;