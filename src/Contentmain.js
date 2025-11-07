import React from 'react';
import ItemsList from './ItemsList';





const Contentmain = ({ items, handleCheck, handleDelete }) => {

    const item = items.length ?? 0;
    return (
        <section>

            {(item.length !== 0) ? (
                <ItemsList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p className='EmptyPara' style={{ marginTop: '2rem' }}>Your List is Empty</p>
            )
            }

        </section>

    )
}

export default Contentmain;
