export function ContactPage() {
  const textHe = `שמי רינה לב ואני מעצבת גרפית ומפיקה בעלת ניסיון של כ-עשור בתחום העיצוב וההפקה.

תחומי ההתמחות שלי הם: מיתוג והרחבת מותג, עיצוב ובנית אתרים, עיצוב שילוט לחברות גדולות, הפקות דפוס מורכבות ואיור.

אני מקפידה לשים דגש רב על שירות מקצועי ללקוח – מיצירת הרעיון הקריאייטיבי למיתוג הכולל קופירייטינג ועיצוב גרפי ועד ההפקה הסופית שכוללת את הלוגיסטיקה של האספקה ויישום המיתוג הלכה למעשה (הפקת דפוס, בחירת החומרים, תכנון והרכבה).

בעלת יחסי אנוש מעולים עם כל שרשרת השירות – החל מסיעור מוחות עם הלקוח עצמו ועד להפעלת קבלני היישום בשטח. 

המחירים שלי הם נוחים וזמני הספקה הם מדויקים ומיידים.

מוזמנים ליצור איתי קשר`;
  const textEn = `Hi, I am Rina Lev – a graphic designer and print producer, have a decade experience in the field of branding, web and print production.

My specialty focusing in branding, brand expansion, finding out the unique selling preposition to every client and an application and market assimilation of these.

I am specializing in a signage design and its production, from all kinds off sizes and materials.

My services are super professional starting from stage of a creative idea and ending a final production and supply – including excellent interpersonal skills,

 favorable prices and immediate availability.

Feel free to contact me:`;
  return (
    <section className='contact-page'>
      <div>
        <img src={require('../assets/imgs/elements/about.png')} alt='rina lev' />
      </div>
      <section className='text-container'>
        <p className='txt-he'>{textHe}</p>
        <p>{textEn}</p>
        <h2>rina.lev@outlook.co.il 972ּּ+549844066</h2>
        <form action='https://formsubmit.co/omermetrim@gmail.com' method='POST'>
          <section className='input-container'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' placeholder='Name' />
          </section>
          <section className='input-container'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' placeholder='Email' />
          </section>
          <section className='input-container'>
            <label htmlFor='msg'>Message</label>
            <textarea type='text' name='msg' id='msg' placeholder='Message' />
          </section>
          <button>Send</button>
        </form>
      </section>
    </section>
  );
}
