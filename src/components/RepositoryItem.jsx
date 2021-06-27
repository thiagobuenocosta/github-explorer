export function RepositoryItem(props) {
    // const { name, description, link } = props.repository;

    return (
        <li>
            <strong>{ props.repository?.name ?? 'Name repo'}</strong>
            
            <p>{  props.repository?.description ?? 'Description repo' }</p>

            <a 
                href={  props.repository?.link ?? '#' }
                target="blank"
            >
                Acessar repositório
            </a>
        </li>
               
    )
}