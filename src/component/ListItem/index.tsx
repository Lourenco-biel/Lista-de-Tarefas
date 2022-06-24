import * as c from './style'
import { Item } from '../../types/Item'
import trash from '../../Assets/trash.svg'

type Props = {
    item: Item,
    onClick: (id: number) => void,
    onChange: (id: number, done: boolean) => void
}

export const ListItem = ({ item, onChange, onClick }: Props) => {

    return (
        <c.Container done={item.done}>
            <label>
                <input
                    type='checkbox'
                    checked={item.done}
                    onChange={e => onChange(item.id, e.target.checked)}
                />
                <span className='checkbox'></span>
            </label>

            <div>{item.name}</div>

            <button onClick={() => onClick(item.id)}>
                <img src={trash} alt="lixeira" />
            </button>
        </c.Container>
    )
}

