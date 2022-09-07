--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2022-09-05 14:08:41

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 838 (class 1247 OID 16452)
-- Name: attribute_type; Type: TYPE; Schema: public; Owner: Bayda
--

CREATE TYPE public.attribute_type AS ENUM (
    'string',
    'number',
    'boolean',
    'number-range'
);


ALTER TYPE public.attribute_type OWNER TO "Bayda";

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 212 (class 1259 OID 16436)
-- Name: assets; Type: TABLE; Schema: public; Owner: Bayda
--

CREATE TABLE public.assets (
    id integer NOT NULL,
    sn character varying(20) NOT NULL,
    model integer
);


ALTER TABLE public.assets OWNER TO "Bayda";

--
-- TOC entry 211 (class 1259 OID 16435)
-- Name: Assets_id_seq; Type: SEQUENCE; Schema: public; Owner: Bayda
--

ALTER TABLE public.assets ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Assets_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 216 (class 1259 OID 16513)
-- Name: _category_attribute; Type: TABLE; Schema: public; Owner: Bayda
--

CREATE TABLE public._category_attribute (
    category_id integer NOT NULL,
    attribute_id integer NOT NULL
);


ALTER TABLE public._category_attribute OWNER TO "Bayda";

--
-- TOC entry 217 (class 1259 OID 16526)
-- Name: _category_model; Type: TABLE; Schema: public; Owner: Bayda
--

CREATE TABLE public._category_model (
    category_id integer NOT NULL,
    model_id integer NOT NULL
);


ALTER TABLE public._category_model OWNER TO "Bayda";

--
-- TOC entry 218 (class 1259 OID 16539)
-- Name: _model_attrvalue; Type: TABLE; Schema: public; Owner: Bayda
--

CREATE TABLE public._model_attrvalue (
    model_id integer NOT NULL,
    attrvalue_id integer NOT NULL
);


ALTER TABLE public._model_attrvalue OWNER TO "Bayda";

--
-- TOC entry 215 (class 1259 OID 16501)
-- Name: attribute_values; Type: TABLE; Schema: public; Owner: Bayda
--

CREATE TABLE public.attribute_values (
    id integer NOT NULL,
    attribute_id integer,
    string_value character varying(100),
    number_value integer,
    boolean_value boolean DEFAULT false NOT NULL,
    models_id integer[]
);


ALTER TABLE public.attribute_values OWNER TO "Bayda";

--
-- TOC entry 221 (class 1259 OID 16650)
-- Name: attribute_values_id_seq; Type: SEQUENCE; Schema: public; Owner: Bayda
--

ALTER TABLE public.attribute_values ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.attribute_values_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 214 (class 1259 OID 16492)
-- Name: attributes; Type: TABLE; Schema: public; Owner: Bayda
--

CREATE TABLE public.attributes (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    title character varying(100) NOT NULL,
    categories integer[],
    type public.attribute_type NOT NULL,
    bool_description character varying(100)
);


ALTER TABLE public.attributes OWNER TO "Bayda";

--
-- TOC entry 213 (class 1259 OID 16491)
-- Name: attributes_id_seq; Type: SEQUENCE; Schema: public; Owner: Bayda
--

ALTER TABLE public.attributes ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.attributes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 209 (class 1259 OID 16409)
-- Name: categories; Type: TABLE; Schema: public; Owner: Bayda
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    title character varying(100) NOT NULL,
    parent_category integer,
    attributes integer[],
    has_children boolean DEFAULT false NOT NULL
);


ALTER TABLE public.categories OWNER TO "Bayda";

--
-- TOC entry 219 (class 1259 OID 16614)
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: Bayda
--

ALTER TABLE public.categories ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 210 (class 1259 OID 16423)
-- Name: models; Type: TABLE; Schema: public; Owner: Bayda
--

CREATE TABLE public.models (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    title character varying(100) NOT NULL,
    description text,
    images character varying(100)[],
    vendor character varying(10) NOT NULL,
    price numeric(100,2) NOT NULL,
    availability integer DEFAULT 0 NOT NULL,
    "values" integer[],
    categories_id integer[]
);


ALTER TABLE public.models OWNER TO "Bayda";

--
-- TOC entry 220 (class 1259 OID 16629)
-- Name: models_id_seq; Type: SEQUENCE; Schema: public; Owner: Bayda
--

ALTER TABLE public.models ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.models_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3380 (class 0 OID 16513)
-- Dependencies: 216
-- Data for Name: _category_attribute; Type: TABLE DATA; Schema: public; Owner: Bayda
--

COPY public._category_attribute (category_id, attribute_id) FROM stdin;
1	1
2	1
3	1
4	1
5	1
6	1
7	1
8	1
27	2
27	6
\.


--
-- TOC entry 3381 (class 0 OID 16526)
-- Dependencies: 217
-- Data for Name: _category_model; Type: TABLE DATA; Schema: public; Owner: Bayda
--

COPY public._category_model (category_id, model_id) FROM stdin;
56	1
56	2
56	3
56	4
56	5
55	6
\.


--
-- TOC entry 3382 (class 0 OID 16539)
-- Dependencies: 218
-- Data for Name: _model_attrvalue; Type: TABLE DATA; Schema: public; Owner: Bayda
--

COPY public._model_attrvalue (model_id, attrvalue_id) FROM stdin;
1	1
2	1
3	1
6	1
4	2
5	3
1	4
4	4
3	5
2	6
5	6
1	7
4	7
6	7
2	8
3	8
5	9
2	10
3	10
5	10
6	10
1	11
4	11
1	12
2	12
3	12
4	12
5	12
6	13
1	14
2	14
3	14
4	14
5	15
6	15
\.


--
-- TOC entry 3376 (class 0 OID 16436)
-- Dependencies: 212
-- Data for Name: assets; Type: TABLE DATA; Schema: public; Owner: Bayda
--

COPY public.assets (id, sn, model) FROM stdin;
\.


--
-- TOC entry 3379 (class 0 OID 16501)
-- Dependencies: 215
-- Data for Name: attribute_values; Type: TABLE DATA; Schema: public; Owner: Bayda
--

COPY public.attribute_values (id, attribute_id, string_value, number_value, boolean_value, models_id) FROM stdin;
1	1	Terra Incognita	\N	f	\N
2	1	Pinguin	\N	f	\N
3	1	Kelty	\N	f	\N
4	2	2	\N	f	\N
5	2	2+1	\N	f	\N
6	2	3	\N	f	\N
7	3	1	\N	f	\N
8	3	2	\N	f	\N
9	3	3	\N	f	\N
10	4	Алюминий	\N	f	\N
11	4	Стекловолокно	\N	f	\N
12	5	Внутри	\N	f	\N
13	5	Снаружи	\N	f	\N
14	6	1-3	\N	f	\N
15	6	3-6	\N	f	\N
\.


--
-- TOC entry 3378 (class 0 OID 16492)
-- Dependencies: 214
-- Data for Name: attributes; Type: TABLE DATA; Schema: public; Owner: Bayda
--

COPY public.attributes (id, name, title, categories, type, bool_description) FROM stdin;
1	brend	Бренд	\N	string	\N
2	kolichestvo-mest	Количество мест	\N	string	\N
3	kolichestvo-vhodov	Количество входов	\N	string	\N
4	material-dug	Материал дуг	\N	string	\N
5	raspolozhenie-dug	Расположение дуг	\N	string	\N
6	ves	Вес	\N	string	\N
\.


--
-- TOC entry 3373 (class 0 OID 16409)
-- Dependencies: 209
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: Bayda
--

COPY public.categories (id, name, title, parent_category, attributes, has_children) FROM stdin;
1	snariazhenie	Снаряжение	\N	\N	t
2	odezhda	Одежда	\N	\N	t
3	obuv	Обувь	\N	\N	t
4	aksessuary	Аксессуары	\N	\N	t
5	bivak	Бивак	\N	\N	t
6	zimnii-sport	Зимний спорт	\N	\N	t
7	tovary-obshego-naznachenia	Товары общего назначения	\N	\N	t
8	akcii	Акции	\N	\N	f
9	verevki	Веревки	1	\N	f
10	zhelezo	Железо	1	\N	f
11	kaski	Каски	1	\N	f
12	ledovoe-snariazhenie	Ледовое снаряжение	1	\N	f
13	golovnie-ubori	Головные уборы	2	\N	t
14	zhileti	Жилеты	2	\N	f
15	noski	Носки	2	\N	f
16	termobelie	Термобелье	2	\N	f
17	shtany	Штаны	2	\N	t
18	botinki	Ботинки	3	\N	f
19	krossovki	Кроссовки	3	\N	f
20	sandalii	Сандалии	3	\N	f
21	skalniki	Скальники	3	\N	f
22	breloki	Брелоки	4	\N	f
23	zamki-dla-bagazha	Замки для багажа	4	\N	f
24	zonti	Зонты	4	\N	f
25	stiazhki-stropi	Стяжки/стропы	4	\N	f
26	furnitura	Фурнитура	4	\N	f
27	palatki	Палатки	5	\N	t
28	tenti	Тенты	5	\N	f
29	rukzaki	Рюкзаки	5	\N	f
30	spalnie-meshki	Спальные мешки	5	\N	f
31	kovriki	Коврики	5	\N	f
32	posuda	Посуда	5	\N	t
33	mebel	Мебель	5	\N	t
34	gornolizhnie-maski	Горнолыжные маски	6	\N	f
35	gornolizhnie-shlemi	Горнолыжные шлемы	6	\N	f
36	snegostupi	Снегоступы	6	\N	f
37	chehli-dla-lizh-snoubordov	Чехлы для лыж/сноубордов	6	\N	f
38	gamaki	Гамаки	7	\N	f
39	germoupakovki	Гермоупаковки	7	\N	f
40	kompressionnie-meshki-chehli	Компрессионные мешки/чехлы	7	\N	f
41	kosmetichki-koshelki	Косметички/кошельки	7	\N	f
42	sredstva-gigieni-polotenca	Средства гигиены/полотенца	7	\N	f
43	sumki	Сумки	7	\N	f
44	fonari	Фонари	7	\N	f
45	balaklavi-maski-podshlemniki	Балаклавы/маски/подшлемники	13	\N	f
46	kepki-panami	Кепки/панамы	13	\N	f
47	multifunkcionalnie	Мультифункциональные	13	\N	f
48	poviazki-na-golovu	Повязки на голову	13	\N	f
49	poviazki-na-sheju	Повязки на шею	13	\N	f
50	shapki	Шапки	13	\N	f
51	gornolizhnie-shtani	Горнолыжные штаны	17	\N	f
52	uteplennie-shtani	Утепленные штаны	17	\N	f
53	membrannie-shtani	Мембранные штаны	17	\N	f
54	trekkingovie-gorodskie-shtani	Треккинговые/городские штаны	17	\N	f
55	kenpingovie	Кемпинговые	27	\N	f
56	trekkingovie	Треккинговые	27	\N	f
57	kastruli-kotli	Кастрюли/котлы	32	\N	f
58	miski	Миски	32	\N	f
59	termokruzhki	Термокружки	32	\N	f
60	termosa	Термоса	32	\N	f
61	kresla	Кресла	33	\N	f
62	stoli	Столы	33	\N	f
64	ucenka	Уценка	\N	\N	f
\.


--
-- TOC entry 3374 (class 0 OID 16423)
-- Dependencies: 210
-- Data for Name: models; Type: TABLE DATA; Schema: public; Owner: Bayda
--

COPY public.models (id, name, title, description, images, vendor, price, availability, "values", categories_id) FROM stdin;
2	palatka-terra-incognita-omega-2	Палатка Terra Incognita Omega 2	Одна из самых популярных моделей двухместной палатки, выпускаемой компанией Terra Incognita. Два отдельных входа дают возможность удобного доступа в спальное помещение и обеспечивают отличную вентиляцию, а в двух больших тамбурах хватит места для размещения всего снаряжения.	\N	34578769	7357.00	3	\N	\N
3	palatka-terra-incognita-zeta-2	Палатка Terra Incognita Zeta 2	Универсальная и практичная двухместная палатка трёхсезонного назначения. Большой и удобный передний тамбур, в котором можно разместить багаж или туристическую кухню. Два входа дают возможность прямого доступа в спальню и обеспечивают идеальную вентиляцию. Установка палатки быстрая и простая.	\N	537354684	5266.00	0	\N	\N
1	palatka-terra-incognita-cresta-2-alu	Палатка Terra Incognita Cresta 2 ALU	Практичная трёхсезонная 2/3-х местная палатка. Усовершенствованная форма каркаса максимально увеличивает объем спального помещения. Большие и удобные тамбура, в которых можно разместить вещи и снаряжение. Два входа дают возможность прямого доступа в спальню и обеспечивают идеальную вентиляцию. Простая и быстрая сборка и разборка.	\N	6464262472	2366.00	1	\N	\N
4	palatka-pinguin-summit-2	Палатка Pinguin Summit 2	Просторная и легкая палатка с высокой степенью устойчивости на ветру, подходит для высокогорных видов спорта, обычного туризма, а также для любых случаев, где требуется жесткая конструкция, обеспеченная тремя дугами и с четырьмя точками пересечения. Также, имеет просторный тамбур и низкий вес.	\N	6845672458	1567.00	2	\N	\N
5	kelty-night-owl-2	Kelty Night Owl 2	Kelty Night Owl 2 – просторная двухместная палатка с системой быстрой и лёгкой установки и возможностью наблюдать за звёздным небом. Технология Kelty Quick-Corner создана для максимально быстрой установки и сборки палатки в самых различных погодных условиях или в темноте. Два больших входа, два просторных тамбура, высокий потолок созданы для комфортного отдыха на природе. Сетчатые карманы для фонарей помогут удобно осветить внутреннее пространство палатки. Просторная и вместительная палатка с тентом Stargazing Fly™ позволяет наслаждаться звёздным небом, и обеспечивает максимальную вентиляцию в самые жаркие ночи.	\N	4776072315	7577.00	1	\N	\N
6	shater-terra-incognita-picnic	Шатёр Terra Incognita Picnic	Максимально просторный и комфортный шатер для семейного отдыха. Имеет два входа. В нем можно вместить стол, стулья и кемпинговую кухню. Юбка по периметру и сетчатые окна защитят Вас от надоедливых насекомых. Шатёр укомплектован прочным и надёжным металлическим каркасом. Дополнительные стальные стойки и защитные шторы (не входят в комплект) обеспечат уют, защиту от солнца или дождя. Для большей ветроустойчивости рекомендуется растянуть ветровые оттяжки.	\N	5324537569	16266.00	1	\N	\N
\.


--
-- TOC entry 3391 (class 0 OID 0)
-- Dependencies: 211
-- Name: Assets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Bayda
--

SELECT pg_catalog.setval('public."Assets_id_seq"', 1, false);


--
-- TOC entry 3392 (class 0 OID 0)
-- Dependencies: 221
-- Name: attribute_values_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Bayda
--

SELECT pg_catalog.setval('public.attribute_values_id_seq', 15, true);


--
-- TOC entry 3393 (class 0 OID 0)
-- Dependencies: 213
-- Name: attributes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Bayda
--

SELECT pg_catalog.setval('public.attributes_id_seq', 6, true);


--
-- TOC entry 3394 (class 0 OID 0)
-- Dependencies: 219
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Bayda
--

SELECT pg_catalog.setval('public.categories_id_seq', 64, true);


--
-- TOC entry 3395 (class 0 OID 0)
-- Dependencies: 220
-- Name: models_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Bayda
--

SELECT pg_catalog.setval('public.models_id_seq', 6, true);


--
-- TOC entry 3213 (class 2606 OID 16440)
-- Name: assets Assets_pkey; Type: CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public.assets
    ADD CONSTRAINT "Assets_pkey" PRIMARY KEY (id);


--
-- TOC entry 3203 (class 2606 OID 16416)
-- Name: categories Categories_pkey; Type: CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT "Categories_pkey" PRIMARY KEY (id);


--
-- TOC entry 3221 (class 2606 OID 16656)
-- Name: _category_attribute _category_attribute_pkey; Type: CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public._category_attribute
    ADD CONSTRAINT _category_attribute_pkey PRIMARY KEY (category_id, attribute_id);


--
-- TOC entry 3223 (class 2606 OID 16654)
-- Name: _category_model _category_model_pkey; Type: CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public._category_model
    ADD CONSTRAINT _category_model_pkey PRIMARY KEY (category_id, model_id);


--
-- TOC entry 3225 (class 2606 OID 16658)
-- Name: _model_attrvalue _model_attrvalue_pkey; Type: CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public._model_attrvalue
    ADD CONSTRAINT _model_attrvalue_pkey PRIMARY KEY (model_id, attrvalue_id);


--
-- TOC entry 3219 (class 2606 OID 16506)
-- Name: attribute_values attribite_values_pkey; Type: CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public.attribute_values
    ADD CONSTRAINT attribite_values_pkey PRIMARY KEY (id);


--
-- TOC entry 3215 (class 2606 OID 16642)
-- Name: attributes attributes_name_key; Type: CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public.attributes
    ADD CONSTRAINT attributes_name_key UNIQUE (name);


--
-- TOC entry 3217 (class 2606 OID 16498)
-- Name: attributes attributes_pkey; Type: CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public.attributes
    ADD CONSTRAINT attributes_pkey PRIMARY KEY (id);


--
-- TOC entry 3205 (class 2606 OID 16616)
-- Name: categories categories_name_key; Type: CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);


--
-- TOC entry 3207 (class 2606 OID 16429)
-- Name: models model_pkey; Type: CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public.models
    ADD CONSTRAINT model_pkey PRIMARY KEY (id);


--
-- TOC entry 3209 (class 2606 OID 16618)
-- Name: models models_name_key; Type: CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public.models
    ADD CONSTRAINT models_name_key UNIQUE (name);


SET default_tablespace = bayda;

--
-- TOC entry 3211 (class 2606 OID 16632)
-- Name: models models_vendor_vendor1_key; Type: CONSTRAINT; Schema: public; Owner: Bayda; Tablespace: bayda
--

ALTER TABLE ONLY public.models
    ADD CONSTRAINT models_vendor_vendor1_key UNIQUE (vendor) INCLUDE (vendor);


--
-- TOC entry 3227 (class 2606 OID 16446)
-- Name: assets fk_asset_model; Type: FK CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public.assets
    ADD CONSTRAINT fk_asset_model FOREIGN KEY (model) REFERENCES public.models(id) NOT VALID;


--
-- TOC entry 3228 (class 2606 OID 16508)
-- Name: attribute_values fk_attribute_id; Type: FK CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public.attribute_values
    ADD CONSTRAINT fk_attribute_id FOREIGN KEY (attribute_id) REFERENCES public.attributes(id) NOT VALID;


--
-- TOC entry 3230 (class 2606 OID 16521)
-- Name: _category_attribute fk_attribute_id; Type: FK CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public._category_attribute
    ADD CONSTRAINT fk_attribute_id FOREIGN KEY (attribute_id) REFERENCES public.attributes(id);


--
-- TOC entry 3233 (class 2606 OID 16547)
-- Name: _model_attrvalue fk_attrvalue_id; Type: FK CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public._model_attrvalue
    ADD CONSTRAINT fk_attrvalue_id FOREIGN KEY (attrvalue_id) REFERENCES public.attribute_values(id);


--
-- TOC entry 3229 (class 2606 OID 16516)
-- Name: _category_attribute fk_category_id; Type: FK CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public._category_attribute
    ADD CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- TOC entry 3231 (class 2606 OID 16529)
-- Name: _category_model fk_category_id; Type: FK CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public._category_model
    ADD CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- TOC entry 3226 (class 2606 OID 16552)
-- Name: categories fk_category_id; Type: FK CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT fk_category_id FOREIGN KEY (parent_category) REFERENCES public.categories(id) NOT VALID;


--
-- TOC entry 3232 (class 2606 OID 16542)
-- Name: _model_attrvalue fk_model_id; Type: FK CONSTRAINT; Schema: public; Owner: Bayda
--

ALTER TABLE ONLY public._model_attrvalue
    ADD CONSTRAINT fk_model_id FOREIGN KEY (model_id) REFERENCES public.models(id);


-- Completed on 2022-09-05 14:08:41

--
-- PostgreSQL database dump complete
--

