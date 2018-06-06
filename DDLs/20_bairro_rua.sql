CREATE TABLE bairro_rua (
  id_bairro_rua int primary key auto_increment,
  id_bairro int not null,
  id_rua int not null
);

alter table bairro_rua
  add constraint foreign key (id_bairro) references bairro(id_bairro),
  add constraint foreign key (id_rua) references rua(id_rua);