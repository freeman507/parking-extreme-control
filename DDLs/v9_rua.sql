create table rua (
	id_rua int primary key auto_increment,
    ds_rua varchar(200) not null,
    nr_rua int not null,
    id_bairro int not null
);

alter table rua
	add constraint foreign key (id_bairro) references bairro(id_bairro);