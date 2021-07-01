interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{ props.repository?.name ?? 'Name repo'}</strong>
            
            <p>{  props.repository?.description ?? 'Description repo' }</p>

            <a 
                href={  props.repository?.html_url ?? '#' }
                target="blank"
            >
                Acessar repositório
            </a>
        </li>
               
    )
}