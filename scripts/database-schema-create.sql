set names 'utf8';
set session_replication_role = 'replica';

create table "invoice" ("invoice_id" uuid not null default gen_random_uuid(), constraint "invoice_pkey" primary key ("invoice_id"));

create table "place" ("place_id" uuid not null default gen_random_uuid(), constraint "place_pkey" primary key ("place_id"));

create table "user" ("user_id" uuid not null default gen_random_uuid(), "email" varchar not null, "password" text not null, constraint "user_pkey" primary key ("user_id"));

create table "reservation" ("reservation_id" uuid not null default gen_random_uuid(), "userId" uuid null, "placeId" uuid null, "invoiceId" uuid null, "timestamp" timestamptz(6) not null default CURRENT_TIMESTAMP, "start_date" date null, "end_date" date null, constraint "reservation_pkey" primary key ("reservation_id"));

alter table "reservation" add constraint "reservation_userId_foreign" foreign key ("userId") references "user" ("user_id") on update cascade on delete set null;
alter table "reservation" add constraint "reservation_placeId_foreign" foreign key ("placeId") references "place" ("place_id") on update cascade on delete set null;
alter table "reservation" add constraint "reservation_invoiceId_foreign" foreign key ("invoiceId") references "invoice" ("invoice_id") on update cascade on delete set null;

set session_replication_role = 'origin';