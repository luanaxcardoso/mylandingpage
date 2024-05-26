'use client'

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <div className="absolute top-0 right-0 m-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' size='sm' className='relative h-6 w-6 p-0'>
                        <Sun className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' size={24} />
                        <Moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' size={24} />
                        <span className='sr-only'>Toggle</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setTheme('light')}>
                        Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>
                        Dark
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
