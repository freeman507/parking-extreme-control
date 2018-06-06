create table tipo_sensor(
	id_tipo_sensor int primary key auto_increment,
    ds_tipo_sensor varchar(200) not null,
    tp_tipo_sensor int not null
);

insert into tipo_sensor (ds_tipo_sensor, tp_tipo_sensor)
	values ('ultrassônico', 1);
    
insert into tipo_sensor (ds_tipo_sensor, tp_tipo_sensor)
	values ('NFE', 2);