create table quadra (
	id_quadra int primary key,
    nr_quadra int not null,
	id_rua int not null
);

alter table quadra
	add constraint foreign key (id_rua) references rua(id_rua);
    
alter table quadra
	add unique index (nr_quadra, id_rua);