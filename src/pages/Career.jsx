import React from 'react'
import Attic from '../components/attic.jsx'
import '../styles/App.css'

const Career = () => {

  return (
    <>  
      <Attic/>
      <div className='content'>
        <h1>
          КАРЬЕРА
        </h1>
        <p>
          Главный капитал компании – люди, работающие в ней. ООО «ЦЕНТРСПЕЦРЕМОНТ» - это сплоченная 
          команда квалифицированных специалистов, способная решать задачи любой сложности.
        </p>
        <img className='image' src={process.env.PUBLIC_URL + '/careerPic.jpeg'} alt='Коллектив'/>
        <h2>
          Открыты вакансии по следующим направлениям:
        </h2>
        <ul>
          <p>
          <li>Инженерно-технические сотрудники</li>
          <li>Электросварщики (все виды сварочных работ)</li>
          <li>Газорезчики</li>
          <li>Слесари-ремонтники</li>
          <li>Огнеупорщики</li>
          </p>
        </ul>
        <p>Телефон отдела кадров: <a href='tel:+74832367385'>+7(4832)36-73-85</a></p>
        <h2>
          Социальные гарантии
        </h2>
        <p>
          Мы заботимся о своих сотрудниках и проводим политику социальной ответственности, 
          направленную на повышение социальной защищенности, соблюдение интересов и социально-трудовых прав сотрудников.
          Социальная программа обеспечивает страхование на случай травм и утраты трудоспособности, 
          бесплатное медицинское обслуживание, пенсионные надбавки. 
        </p>
        <img className='image' src={process.env.PUBLIC_URL + '/career.jpg'} alt='Трудовые будни'/>
        <p>
          Мы ежегодно направляем своих работников на обучение и повышение квалификации. 
          Профессиональное обучение кадров в организации охватывает все категории работников, носит 
          непрерывный характер и осуществляется на протяжении всей трудовой деятельности. 
          Все специалисты имеют необходимые допуски и разрешения.
        </p>
      </div>
    </>
  )}

export default Career