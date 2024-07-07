import React from 'react';

const SearchArea = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section>
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Buscar" type="text" onChange={props.handleChange} />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default SearchArea;