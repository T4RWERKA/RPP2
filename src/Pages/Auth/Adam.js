import React, { Component } from "react";
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Adam from "../../assets/damsm.jpg"

class Hilevich extends Component {
    render() {
        return (
            <>
                <h2>Адам Глобус</h2>
                <div class="who-is-this">
                    <img src={Adam} width="200" alt="" />
                    <p class="person_about">Ада́м Гло́бус (белор. Адам Глобус, также Адам Глёбус; наст. имя и фамилия Влади́мир Вячесла́вович Ада́мчик, белор. Уладзімір Вячаслававіч Адамчык; род. 29 сентября 1958) — советский и белорусский писатель, поэт, художник, издатель.</p>
                </div>

                <Timeline lineColor={'#ddd'}>
                    <TimelineItem
                        key="001"
                        dateText="1958 – 1970-е"
                        dateInnerStyle={{ background: '#333', color: '#fff' }}
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <h3>Детство</h3>
                        <p>
                            Глобус родился в ДзержинскеМинской области в семье белорусского писателя (белорус : Вячеслав Адамчик). С 1959 года проживал в Минске.
                            Настоящее имя - Владимир Васильевич Адамчик
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="002"
                        dateText="1972 – 1975"
                        dateInnerStyle={{ background: '#333', color: '#fff' }}
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <h3>Учеба и работа</h3>
                        <p>
                        Окончил педагогический факультет им. (1977), художественный факультет Белорусский театрально-художественный институт (1983). Работал рисовальщиком, художником-реставратором, графиком, редактором журнала «Криница» (с 1987)         </p>
                    </TimelineItem>
                    <TimelineItem
                        key="003"
                        dateText="1970-е – наше время"
                        dateInnerStyle={{ background: '#333', color: '#fff' }}
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <h3>Активизм</h3>
                        <p>
                        Он был одним из основателей неформального объединения молодых писателей «Тутейшийя» (Tuteishyja, 1986–1990), что в силу обстоятельств связано не только с литературой. , но также и выражение активной социальной и политической позиции. В частности, в октябре 1988 года и был организован союз, ставший впоследствии традиционным, прежде всего в Беларуси, акция поминовения под названием «Ева предков» с многотысячным шествием и митингом. Член Союза писателей (1988) (с 1989 г.).
                        </p>
                    </TimelineItem>
                </Timeline>

                <div class="map-on-right">
                    <div class="awards-creativity">
                        <h2>Публикации переводы на разные языки</h2>
                        <ul>
                            <li><span>«Оборотни» (1991 г. Минск, " БДПР »32п. художественный журнал ABC №1 Регистрационный номер 171), перевод Алены Адамчик</span></li>
                            <li><span>«Смерть - это человек» (Индекс цензуры 1993 г., Лондон), перевод Веры Рич</span></li>
                            <li><span>«Unser Stadtviertel» (1995 г., Weißrussland - die eroberte Sprache (= Ostara 4). Ганновер: Rabenrat-Verlag) перевод Норберта Рандоу</span></li>
                            <li><span>«Демоникамеронские сказки» (Индекс цензуры Лондона 1996 года ISBN0-904286-51-7 ) перевод Веры Рич</span></li>
                            <li><span>Демонокамерон" (1998 г. Белосток, "ZB w Rzeczypospolitej Polskiej" ISBN9788391005804 ) перевод Ян Максимюк</span></li>
                            <li><span>"Lyrics BY" (2007 Москва, "АСТ" 576с. ISBN978-5-17-043391-9 ), перевод Александр Яроменко, Алексей Парщиков, Вячеслав Купреянов, Дмитрий Мизгулин, Алексей Андреев, Святозар Барченко</span></li>
                            <li><span>«Белорусский» (2006 г. Минск, «Сучасный литаратарь» 161-166стр. ISBN 985-14-1286-4 ), перевод Венди Куинн</span></li>
                        </ul>
                    </div>
                    <div class="map-and-video">
                        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/JlVkRjkt8H0"></iframe>
                        <iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Minsk+(Place)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>

                <div class="creation">
                    <h2>Творчество</h2>
                    <p>Первые публикации стихов — в 1981 году (еженедельник «Літаратура і мастацтва», журнал «Маладосць», «Квадрат» (1985). На русском языке вышли книги «Оборотни» (1991), «Demonokameron» (1993) и «Лирика BY» (2007), составленная из переводов поэзии, сделанных русскими поэтами Александром Ерёменко, Алексеем Парщиковым, Вячеславом Куприяновым, Дмитрием Мизгулиным, и лирической прозы, переведенной Святозаром Барченко и Алексеем Андреевым.</p>
                </div>

                <div>
                    <h2>Библиография</h2>
                    <ul class="list-of-works">
                        <li><span>«Парк» (1988)</span></li>
                        <li><span>«Одиночество на стадионе» (1989)</span></li>
                        <li><span>«Смерть — мужчина» (1959)</span></li>
                        <li><span>«Перекрёсток» (1993)</span></li>
                        <li><span>«Домовикомерон» (1994)</span></li>
                        <li><span>«Только не говори моей маме» (1995)</span></li>
                        <li><span>«Койданово» (1997)</span></li>
                        <li><span>«Новый домовикомерон» (1998)</span></li>
                        <li><span>«Post scriptum» (1999)</span></li>
                        <li><span>«Тексты» (2000), сборник всех предыдущих книг</span></li>
                        <li><span>«Браславская стигмата» (2001)</span></li>
                        <li><span>«Тетради» (2003)</span></li>
                        <li><span>«Дом». Роман (2005)</span></li>
                        <li><span>«Современники» (2006)</span></li>
                    </ul>
                </div>
            </>
        );
    }
}
export default Hilevich;
