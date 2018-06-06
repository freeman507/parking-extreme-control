create table funcionario (
	id_funcionario int primary key auto_increment,
    ds_cargo varchar(200),
    dt_admissao date,
    dt_demissao date,
    id_pessoa int not null
);

alter table funcionario
	add constraint foreign key (id_pessoa) references pessoa(id_pessoa);