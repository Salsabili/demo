import React from 'react'
import {Card , Button} from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Rate } from 'antd';

export default function latest() {
    return (
          <div className="latest">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.hdqwalls.com/wallpapers/bthumb/joker-imax-poster-43.jpg" />
  <Card.Body>
    <Card.Title> Joker</Card.Title>
    <Card.Text>
      Joker est un thriller psychologique américain, coécrit et réalisé par Todd Phillips, sorti en 2019.
       Il raconte, dans une histoire originale, la transformation d'Arthur Fleck en Joker, un dangereux tueur psychopathe qui deviendra, par la suite, le plus grand ennemi de Batman.
    </Card.Text>
     <Button variant="outline-danger"> Watch</Button>{' '}
     <Rate></Rate>
     
  </Card.Body>
</Card>


 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.hdqwalls.com/wallpapers/bthumb/spiderman-red-suit-4k-mi.jpg" />
  <Card.Body>
    <Card.Title> The Amazing Spiderman 3</Card.Title>
    <Card.Text>
      Après ses spectaculaires débuts avec les Avengers, le jeune Peter Parker découvre peu à peu sa nouvelle 
      identité, celle de Spider-Man, le superhéros lanceur de toile. Galvanisé par ses expériences 
      précédentes, Peter rentre chez lui auprès de sa tante May, sous l'oeil attentif de son nouveau mentor
    </Card.Text>
     <Button variant="outline-danger"> Watch</Button>{' '}
     <Rate></Rate>
     
  </Card.Body>
</Card>



 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://imgsrc.cineserie.com/2019/12/batman.jpg?ver=1" />
  <Card.Body>
    <Card.Title> Batman Hush</Card.Title>
    <Card.Text>
      Batman : Silence (titre original : Batman: Hush) est un film d'animation 
      américain réalisé par Justin Copeland, sorti en direct-to-video en 2019.
    </Card.Text>
     <Button variant="outline-danger"> Watch</Button>{' '}
     <Rate></Rate>
     
  </Card.Body>
</Card>



 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.hdqwalls.com/wallpapers/bthumb/john-wick-chapter-3-still-5k-f0.jpg" />
  <Card.Body>
    <Card.Title>John wick</Card.Title>
    <Card.Text>
      John Wick Parabellum1 ou John Wick : Chapitre 3 - Parabellum au Québec (John Wick: Chapter 3 – Parabellum) est un 
      film d'action américain réalisé par Chad Stahelski, sorti en 2019.
    </Card.Text>
     <Button variant="outline-danger"> Watch</Button>{' '}
     <Rate></Rate>
     
  </Card.Body>
</Card>



 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.hdqwalls.com/wallpapers/bthumb/mr-fat-incredible-4k-5g.jpg" />
  <Card.Body>
    <Card.Title>Mr fat incredible</Card.Title>
    <Card.Text>
      
    </Card.Text>
     <Button variant="outline-danger"> Watch</Button>{' '}
     <Rate></Rate>
     
  </Card.Body>
</Card>



 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.hdqwalls.com/wallpapers/thumb/sonic-the-hedgehog-4k-2020-movie-93.jpg" />
  <Card.Body>
    <Card.Title>Sonic the hedgehog</Card.Title>
    <Card.Text>
      Est un film américano-japonais réalisé par Jeff Fowler, sorti le 12 février 2020.
        Il s'agit d'une adaptation cinématographique, mêlant animation et prise de vues réelles,
         du personnage Sonic, tirée de la série de jeux vidéo du même nom éditée par Sega.
    </Card.Text>
     <Button variant="outline-danger"> Watch</Button>{' '}
     <Rate></Rate>
     
  </Card.Body>
</Card>


 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.hdqwalls.com/wallpapers/bthumb/jumanji-the-next-level-8k-fy.jpg" />
  <Card.Body>
    <Card.Title>Jumanji the next level</Card.Title>
    <Card.Text>
      un film américain réalisé par Jake Kasdan, sorti en 2019. 
      Il s'agit de la suite de Jumanji : Bienvenue dans la jungle, sorti en 2017.
    </Card.Text>
     <Button variant="outline-danger"> Watch</Button>{' '}
     <Rate></Rate>
     
  </Card.Body>
</Card>
        </div>
    )
}
