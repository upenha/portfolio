import { TProjectItem } from '@/services/notion';

export const ProjectItem = ({ description, name, url }: TProjectItem) => {
  return (
    <li>
      <a
        className="flex flex-col !no-underline group gap-1"
        href={url}
        target={url === '/' ? '_self' : '_blank'}
        rel="noreferrer"
      >
        <div>
          <span className="font-medium underline underline-offset-4 flex flex-row gap-2 items-center group-hover:opacity-75 transition-all duration-250">
            {name}
          </span>
        </div>
        <span className="text-muted-foreground group-hover:opacity-75">
          {description}
        </span>
      </a>
    </li>
  );
};
