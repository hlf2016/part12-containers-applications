import { useState, useEffect } from 'react'
import { Diary, NewDiary } from './types'
import { getAllDiaries, addDiary } from './services/diaryService'

const App = () => {
  const [diaries, setDiaries] = useState<Diary[]>([])
  const [date, setDate] = useState('')
  const [visibility, setVisibility] = useState('')
  const [weather, setWeather] = useState('')
  const [comment, setComment] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    getAllDiaries().then(data => {
      setDiaries(data)
    })
  }, [])

  const commitDiary = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const newDiary: NewDiary = {
      date,
      visibility,
      weather,
      comment
    }

    addDiary(newDiary).then(diary => {
      setDiaries(diaries.concat(diary))
      setDate('')
      setVisibility('')
      setWeather('')
      setComment('')
    }).catch(error => {
      if (error.response) {
        setErrorMessage(error.response.data)
        setTimeout(() => {
          setErrorMessage('')
        }, 3000)
      }
    })

  }
  return (
    <div className="App">
      <h2>Add new entry</h2>
      {errorMessage ? <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div> : null
      }
      <form onSubmit={commitDiary}>
        <div>
          <label htmlFor='date'>date</label>
          <input id='date' type='date' value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div>
          <label>visibility</label> &nbsp;&nbsp;&nbsp;
          great <input type='radio' name='visibility' onChange={() => setVisibility('great')} />
          good <input type='radio' name='visibility' onChange={() => setVisibility('good')} />
          ok <input type='radio' name='visibility' onChange={() => setVisibility('ok')} />
          poor <input type='radio' name='visibility' onChange={() => setVisibility('poor')} />
        </div>
        <div>
          <label>weather</label>&nbsp;&nbsp;&nbsp;
          sunny <input type='radio' name='weather' onChange={() => setWeather('sunny')} />
          rainy <input type='radio' name='weather' onChange={() => setWeather('rainy')} />
          cloudy <input type='radio' name='weather' onChange={() => setWeather('cloudy')} />
          stormy <input type='radio' name='weather' onChange={() => setWeather('stormy')} />
          windy <input type='radio' name='weather' onChange={() => setWeather('windy')} />
        </div>
        <div>
          <label htmlFor='comment'>comment</label>
          <input id='comment' value={comment} onChange={e => setComment(e.target.value)} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2> Diary entries</h2>
      {
        diaries.map(diary => {
          return (
            <div key={diary.id}>
              <h3>{diary.date}</h3>
              <p>visibility: {diary.visibility}</p>
              <p>weather: {diary.weather}</p>
              <p>comment: {diary.comment}</p>
            </div>
          )
        })
      }
    </div >
  );
}

export default App;
