INSERT INTO public."role" ("name")
VALUES ('ROLE_PKI_ADMIN');


INSERT INTO public.account (id, email, "password", salt)
--bilo je admin@gmail.com, promenjeno zbog SSO-a
--sifra je password
VALUES ('20d0dad6-bd22-4898-917f-935c080bab76', 'busep2023+4@gmail.com',
        '$2a$10$SdVFUY0Ev0vJVqWNE6GRwuJLhbYWFjUmqIMJ7xcU9myNm6ObGsX5S', 'salt');


INSERT INTO public.account_role (account_id, role_id)
VALUES ('20d0dad6-bd22-4898-917f-935c080bab76', 1);