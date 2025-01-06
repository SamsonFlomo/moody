

// Handle Input Change
const handleChange = (e, setUser) => {
  const { id, value } = e.target;
  setUser((prevState) => ({
    ...prevState,
    [id]: value,
  }));
};

const toggleState = (setState, toToggleStr) => {
  setState((prevState) => ({
    ...prevState,
    [toToggleStr]: !prevState[toToggleStr],
  }));
};

// HANDLE MOOD CLICK
const handleMoodClick = (e, setMood, setSelectedMood) => {
  const selectedMoodId = e.target.id;
  changeMoodSelectValue(setMood, selectedMoodId);
  setSelectedMood(e.target.id.slice(5));
};

const changeMoodSelectValue = (setMood, selectdMoodId) => {
  setMood(prevMood => {
    return prevMood.map((mood) => {
      if (mood.id === selectdMoodId) {
        return { ...mood, selected: "selected-emoji" };
      } else {
        return { ...mood, selected: "unselected-emoji" };
      }
    })
  })
}

const resetMoodSelectValue = (setMood, setSelectedMood) => {
  setMood(prevMood => {
    return prevMood.map((mood) => {
      return { ...mood, selected: "" };
    })
  })

  setSelectedMood("");
}

// FORMAT Date 
const displayFormatedDate = (firebaseDate) => {
  const date = firebaseDate.toDate()
  const day = date.getDate()
  const year = date.getFullYear()

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const month = monthNames[date.getMonth()]

  let hours = date.getHours()
  let minutes = date.getMinutes()
  hours = hours < 10 ? "0" + hours : hours
  minutes = minutes < 10 ? "0" + minutes : minutes

  return `${day} ${month} ${year} - ${hours}:${minutes}`
}

// REPLACE NEW LINES TO BREAKS.
const replaceNewLines = (body) => {
  return body.split(/\n/g).map((line, index) => (
    <>
      {line}
      <br key={index} />
    </>
  ));
};


export {
  handleChange,
  handleMoodClick,
  resetMoodSelectValue,
  displayFormatedDate,
  replaceNewLines,
  toggleState,
};
