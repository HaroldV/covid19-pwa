import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import moment from 'moment';

const List = ({ data }) => (
    <>
        {data.map(item => {
            return (
                <ListGroup>
                    <ListGroupItem active>Pais: {item.country}</ListGroupItem>
                    <ListGroupItem>Departamento/Provincia: {item.province}</ListGroupItem>
                    <ListGroupItem>Casos confirmados: {item.confirmed}</ListGroupItem>
                    <ListGroupItem>Cantidad de muertes: {item.deaths}</ListGroupItem>
                    <ListGroupItem>Cantidad de recuperados: {item.recovered}</ListGroupItem>
                    <ListGroupItem>Ultima actualizacion: {moment(item.lastUpdate).format('YYYY/MM/DD')}</ListGroupItem>
                </ListGroup>
            )
        })}
    </>
);

export default List;