import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import PersonDetail from '../PersonDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Section() {
  const classes = useStyles();
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const personas = res.data;
        setPersons(personas);
      })
    })

  return (
    <div className={classes.root}>
      <ul className="App">
        {persons.map((person, index) => {
          <PersonDetail 
            key={index}
            name={person.name}
            username={person.userName}
            email={person.email}
            address={person.address}
            phone={person.phone}
          />
        })}
      </ul>
    </div>
  );
}

export default Section;