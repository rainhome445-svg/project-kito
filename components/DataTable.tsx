'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp, ChevronDown } from 'lucide-react';

export interface Column<T> {
  key: string;
  header: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
  render?: (item: T, index: number) => React.ReactNode;
  width?: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyField: keyof T;
  sortable?: boolean;
  hoverable?: boolean;
  striped?: boolean;
  className?: string;
  emptyMessage?: string;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  keyField,
  sortable = true,
  hoverable = true,
  striped = false,
  className,
  emptyMessage = 'No data available',
}: DataTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  const handleSort = (key: string) => {
    if (!sortable) return;
    
    let direction: 'asc' | 'desc' = 'desc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0;
    
    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];
    
    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const getValue = (obj: T, path: string) => {
    return path.split('.').reduce((acc: any, part) => acc && acc[part], obj);
  };

  if (data.length === 0) {
    return (
      <div className={cn('bg-surface border border-border-subtle rounded-md p-8 text-center', className)}>
        <p className="text-text-secondary text-sm">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={cn('bg-surface border border-border-subtle rounded-md overflow-hidden', className)}>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border-subtle bg-black/50">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={cn(
                    'px-4 py-3 text-[9px] font-black text-white/40 uppercase tracking-widest',
                    column.align === 'right' && 'text-right',
                    column.align === 'center' && 'text-center',
                    sortable && column.sortable !== false && 'cursor-pointer hover:text-white/60 transition-colors'
                  )}
                  style={{ width: column.width }}
                  onClick={() => column.sortable !== false && handleSort(column.key)}
                >
                  <div className={cn(
                    'flex items-center gap-1',
                    column.align === 'right' && 'justify-end',
                    column.align === 'center' && 'justify-center'
                  )}>
                    {column.header}
                    {sortable && column.sortable !== false && sortConfig?.key === column.key && (
                      sortConfig.direction === 'asc' 
                        ? <ChevronUp className="w-3 h-3" />
                        : <ChevronDown className="w-3 h-3" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {sortedData.map((item, index) => (
              <tr
                key={String(item[keyField])}
                className={cn(
                  'transition-colors duration-150',
                  hoverable && 'hover:bg-white/5 cursor-pointer',
                  striped && index % 2 === 1 && 'bg-black/20'
                )}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={cn(
                      'px-4 py-3',
                      column.align === 'right' && 'text-right',
                      column.align === 'center' && 'text-center'
                    )}
                  >
                    {column.render 
                      ? column.render(item, index)
                      : (
                        <span className={cn(
                          'text-sm',
                          column.key.includes('price') || column.key.includes('change') || column.key.includes('volume') || column.key.includes('cap')
                            ? 'font-bold tabular-nums'
                            : 'font-medium'
                        )}
                          style={column.key.includes('price') || column.key.includes('change') || column.key.includes('volume') || column.key.includes('cap')
                          ? { fontFamily: '"JetBrains Mono", ui-monospace, monospace' } as any
                            : undefined}
                        >
                          {getValue(item, column.key)}
                        </span>
                      )
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
