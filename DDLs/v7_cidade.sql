create table cidade (
	id_cidade int primary key auto_increment,
    ds_cidade varchar(200),
    id_estado int not null
);

alter table cidade
	add constraint foreign key (id_estado) references estado(id_estado); 