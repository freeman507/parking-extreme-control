create table sensor (
	id_sensor int primary key auto_increment,
    dt_compra date,
    dt_descarte date,
    ds_codigo_rastreador varchar(200),
    fg_ativo boolean,
    id_estacionamento int not null,
    id_tipo_sensor int not null
);

alter table sensor
	add constraint foreign key (id_estacionamento) references estacionamento(id_estacionamento),
    add constraint foreign key (id_tipo_sensor) references tipo_sensor(id_tipo_sensor);