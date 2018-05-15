create table funcionario_quadra (
	id_funcionario_quadra int primary key auto_increment,
    id_quadra int not null,
    id_funcionario int not null
);

alter table funcionario_quadra
	add constraint foreign key (id_quadra) references quadra(id_quadra),
    add constraint foreign key (id_funcionario) references funcionario(id_funcionario);