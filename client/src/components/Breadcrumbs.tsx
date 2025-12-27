// src/components/Breadcrumbs.tsx

import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbSchema } from '@/seo/StructuredData';
import { BreadcrumbItem } from '@/seo/types';
import { cn } from '@/lib/utils';
import { useBreadcrumbs } from '@/seo/hooks/useBreadCrumbs';

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const breadcrumbs = useBreadcrumbs(items);

  if (breadcrumbs.length <= 1) return null;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <nav
        aria-label="Breadcrumb"
        className={cn('flex items-center space-x-1 text-sm text-muted-foreground', className)}
      >
        <ol className="flex items-center space-x-1" itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const isHome = index === 0;

            return (
              <li
                key={item.path}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground/50" aria-hidden="true" />
                )}
                {isLast ? (
                  <span
                    className="font-medium text-foreground"
                    itemProp="name"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="hover:text-primary transition-colors flex items-center gap-1"
                    itemProp="item"
                  >
                    {isHome && <Home className="h-4 w-4" aria-hidden="true" />}
                    <span itemProp="name">{isHome ? '' : item.name}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
