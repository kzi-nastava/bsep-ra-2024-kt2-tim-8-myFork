INSERT INTO public."role"
(id, "name")
values
        ('037bbd08-1f2c-4f9d-80af-1710d90efb01', 'ROLE_ADMIN'),
        ('79113e08-0b50-41ee-a8ea-42559259d44e', 'ROLE_CLIENT'),
        ('2cdfba8e-78a3-46a9-b414-96a41d1a5c62', 'ROLE_EMPLOYEE');

INSERT INTO public.privilege
(id, "name")
values
       ('ecf70d65-5b85-4ef9-971f-611bad77076e', 'updatePrivilege'),
       ('355c6b04-6db3-4330-8ab0-e42538dabe90', 'getAllPrivilege'),
       ('e020ef1f-eb11-4d1d-bedf-b87c033de306', 'getAllPrivilegeForRole'),
       ('fc797a4e-009a-44de-aec0-d7ca52c64609', 'getRoles'),
       ('37667806-a976-43ab-bd1f-76b194a925be', 'getAllLogs'),
       ('85deb19a-6bbb-4a97-93f1-7d118f17c014', 'getLoggedInInfo'),
       ('ab494841-f5aa-4e4e-b6e2-5d8c1085eb3f', 'updateLoggedInInfo');



INSERT INTO public.roles_privileges
(role_id, privilege_id)
values
       -- ADMIN
       ('037bbd08-1f2c-4f9d-80af-1710d90efb01', 'ecf70d65-5b85-4ef9-971f-611bad77076e'),
       ('037bbd08-1f2c-4f9d-80af-1710d90efb01', '355c6b04-6db3-4330-8ab0-e42538dabe90'),
       ('037bbd08-1f2c-4f9d-80af-1710d90efb01', 'e020ef1f-eb11-4d1d-bedf-b87c033de306'),
       ('037bbd08-1f2c-4f9d-80af-1710d90efb01', 'fc797a4e-009a-44de-aec0-d7ca52c64609'),
       ('037bbd08-1f2c-4f9d-80af-1710d90efb01', '85deb19a-6bbb-4a97-93f1-7d118f17c014'),
       ('037bbd08-1f2c-4f9d-80af-1710d90efb01', 'ab494841-f5aa-4e4e-b6e2-5d8c1085eb3f'),
       ('037bbd08-1f2c-4f9d-80af-1710d90efb01', '37667806-a976-43ab-bd1f-76b194a925be'),
       -- CLIENT
    ('79113e08-0b50-41ee-a8ea-42559259d44e', '85deb19a-6bbb-4a97-93f1-7d118f17c014'),
       ('79113e08-0b50-41ee-a8ea-42559259d44e', 'ab494841-f5aa-4e4e-b6e2-5d8c1085eb3f'),
       --EMPLOYEE
       ('2cdfba8e-78a3-46a9-b414-96a41d1a5c62', '85deb19a-6bbb-4a97-93f1-7d118f17c014'),
       ('2cdfba8e-78a3-46a9-b414-96a41d1a5c62', 'ab494841-f5aa-4e4e-b6e2-5d8c1085eb3f');




-- email: busep2023+n@gmail.com n ∈ [1,4] password: Password1!, mejlovi idu redom:   admin client
INSERT INTO public.account (is_activated,is_blocked,status,employee_id,id,email,"password",salt) VALUES
 (true,false,1,'657d9c8f-c5d0-491d-9ce2-7c6c0fc5a70c','6b5e0bda-8850-44c6-a7b0-04d4f6df06d9','busep2023+4@gmail.com','$2a$10$8aC7m1NpO9z1X/pjW.EsKO6wGIP8BU5HhjlhWCz1jB59OCmfu2/4G','pHebyOud');

INSERT INTO public.account (is_activated,is_blocked,status,employee_id,id,email,"password",salt) VALUES
    (true,false,1,'657d9c8f-c5d0-491d-9ce2-7c6c0fc5a70c','1b5e0bda-8850-44c6-a7b0-04d4f6df06d9','busep2023+5@gmail.com','$2a$10$8aC7m1NpO9z1X/pjW.EsKO6wGIP8BU5HhjlhWCz1jB59OCmfu2/4G','pHebyOud');


INSERT INTO public.address (id,city,country,street,street_number) VALUES
       ('a74fceb6-2c08-4dec-b940-4fa554ecfb0f','NOVI SAD','SRBIJA','FUTOSKA','55b');

INSERT INTO public.address (id,city,country,street,street_number) VALUES
    ('b74fceb6-2c08-4dec-b940-4fa554ecfb0f','NOVI SAD','SRBIJA','FUTOSKA','55b');

INSERT INTO public.users_roles (role_id,user_id) VALUES
       ('037bbd08-1f2c-4f9d-80af-1710d90efb01','6b5e0bda-8850-44c6-a7b0-04d4f6df06d9');

INSERT INTO public.users_roles (role_id,user_id) VALUES
    ('79113e08-0b50-41ee-a8ea-42559259d44e','1b5e0bda-8850-44c6-a7b0-04d4f6df06d9');

INSERT INTO public.administrator (address_id,id,"name",phone_number,surname) VALUES
       ('a74fceb6-2c08-4dec-b940-4fa554ecfb0f','657d9c8f-c5d0-491d-9ce2-7c6c0fc5a70c','Pera','666666','Peric');

INSERT INTO public.hr_manager (address_id,id,"name",phone_number,surname,client_type,packet) VALUES
    ('b74fceb6-2c08-4dec-b940-4fa554ecfb0f','657d9c8f-c5d0-491d-9ce2-7c6c0fc5a70c','Pera','666666','Peric','PHYSICAL','GOLD');

