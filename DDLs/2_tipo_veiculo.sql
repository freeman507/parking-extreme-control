create table tipo_veiculo (
	id_tipo_veiculo int primary key auto_increment,
    ds_tipo_veiculo varchar(200) not null,
    tp_tipo_veiculo int not null
);

insert into tipo_veiculo (ds_tipo_veiculo, tp_tipo_veiculo)
	values ('carro', 1);
    
insert into tipo_veiculo (ds_tipo_veiculo, tp_tipo_veiculo)
	values ('moto', 2);