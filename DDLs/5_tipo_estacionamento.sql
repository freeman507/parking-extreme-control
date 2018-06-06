create table tipo_estacionamento (
	id_tipo_estacionamento int primary key auto_increment,
    ds_tipo_estacionamento varchar(200) not null,
    tp_tipo_estacionamento int not null
);

insert into tipo_estacionamento (ds_tipo_estacionamento, tp_tipo_estacionamento)
	values ('normal', 1);
    
insert into tipo_estacionamento (ds_tipo_estacionamento, tp_tipo_estacionamento)
	values ('preferencial', 2);
    
insert into tipo_estacionamento (ds_tipo_estacionamento, tp_tipo_estacionamento)
	values ('emergência', 3);
    
insert into tipo_estacionamento (ds_tipo_estacionamento, tp_tipo_estacionamento)
	values ('farmácia', 4);
    
insert into tipo_estacionamento (ds_tipo_estacionamento, tp_tipo_estacionamento)
	values ('polícia', 5);