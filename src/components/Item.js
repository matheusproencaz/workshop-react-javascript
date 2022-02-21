import PropTypes from 'prop-types';

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

function Item({ marca, ano_lancamento }) {
    return( 
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    );
}

export default Item;