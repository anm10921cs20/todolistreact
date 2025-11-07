import React from 'react';
import ItemsList from './ItemsList';





const Contentmain = ({ items, handleCheck, handleDelete }) => {


    return (
        <section>

            {(items.length) ? (
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
