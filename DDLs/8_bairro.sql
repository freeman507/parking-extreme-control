create table bairro (
	id_bairro int primary key auto_increment,
    ds_bairro varchar(200) not null,
    id_cidade int not null
);

alter table bairro
	add constraint foreign key (id_cidade) references cidade(id_cidade);