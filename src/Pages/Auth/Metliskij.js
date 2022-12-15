import React, { Component } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Metlitskijimg from "../../assets/Nikolaj_Metlitskij.jpg"

class Metlitskij extends Component{    
    render() {
    return (
            <>
                <h2>Николай Метлицкий</h2>
                <div class="who-is-this">
                    <img src={Metlitskijimg} width="400" alt="" />
                    <p class="person_about">Никола́й Миха́йлович Метли́цкий (белор. Мікала́й Міха́йлавіч (Міко́ла) Мятлі́цкі; 20 марта 1954, д. Бабчин, Хойнинский район, Гомельская область — 27 ноября 2021) — белорусский поэт, переводчик, публицист, журналист. Заслуженный деятель культуры Республики Беларусь (2019). Лауреат Государственной премии Республики Беларусь имени Янки Купалы (1998). Лауреат премии Ленинского комсомола Белорусской ССР (1986). Лауреат Специальной премии Президента Республики Беларусь деятелям культуры и искусства (2013). Член Союза писателей СССР (1981).</p>
                </div>

                <Timeline lineColor={'#ddd'}>
                    <TimelineItem
                        key="001"
                        dateText="1935 – 1945"
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
                        Родился 20 марта 1954 года в крестьянской семье в д. Бабчин Хойникского района, Гомельской области, Белорусская ССР.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="002"
                        dateText="1945 – 1959"
                        dateInnerStyle={{ background: '#333', color: '#fff' }}
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <h3>Учеба</h3>
                        <p>
                        В 1971 году окончил Бабчинскую среднюю школу. В 1976 году — филологический факультет Белорусского государственного университета имени В. И. Ленина. </p>
                    </TimelineItem>
                    <TimelineItem
                        key="003"
                        dateText="1959 – 2000"
                        dateInnerStyle={{ background: '#333', color: '#fff' }}
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <h3>Работа</h3>
                        <p>
                        Работал в редакции газеты «Ленінскі сцяг», корреспондентом еженедельника «Літаратура і мастацтва» (1977—1983), старшим редактором редакции критики, литературоведения и драматургии издательства «Мастацкая літаратура» (1983—2002). В 2002—2014 годах — главный редактор старейшего белорусского литературного журнала «Полымя» (издательский дом «Звязда»). Является секретарём Союза писателей Беларуси.
                        </p>
                    </TimelineItem>
                </Timeline>

                <div class="map-on-right">
                    <div class="awards-creativity">
                        <h2>Творчество</h2>
                        <p>
                        Дебютировал стихотворением (газета «Ленінскі сцяг»). Центральной темой творчества Н. Метлицкого стала чернобыльская трагедия, которая непосредственно затронула родные места поэта — деревню Бабчин Хойникского района.
                        </p>
                        <p>
                        Перевёл на белорусский язык ряд текстов поэтов Китая («Пад крыламі дракона. Сто паэтаў Кітая»), Индии, Таджикистана, Казахстана (Абай Кунанбаев).
                        </p>
                        <p>
                        Поэзия Н. Метлицкого переводилась на русский, болгарский, сербский, таджикский языки.
                        </p>
                    </div>
                    <div class="map-and-video">
                        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/i9B2cud2284"></iframe>
                        <iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Minsk+(Place)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>

                <div>
                    <h2>Библиография</h2>
                    <ul class="list-of-works">
                        <li><span>(«Обелиск во ржи») (1980)</span></li>
                        <li><span>(«Горький юг») (1988)</span></li>
                        <li><span>(«Благословение») (1991)</span></li>
                        <li><span>(«Ожидание солнца») (1994)</span></li>
                        <li><span>(«Хойникская тетрадь») (1999)</span></li>
                        <li><span>(«Закрытый дом») (2005)</span></li>
                        <li><span>(«Тепло аистова крыла : полесские стихотворения») (2010)</span></li>
                        <li><span>(«На берегу моём : книга поэзии») (2010)</span></li>
                        <li><span>(«Человек поднимает небо : стихотворения и поэмы») (2012)</span></li>
                    </ul>
                </div>
            </>
        );
    }
}

export default Metlitskij;
