import React from 'react';
import Component from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import img from '../img/heThicc.jpg'

export default function PokemonCard({name, imgUrl}) {


  return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pikachu is the best friend of all bois and gurls. Those who may choose to cross Pikachu's path perish.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

// class PokemonCard extends Component{

//     constructor(nameEn='Pikachu', imgUrl='https://bit.ly/3gFFmTD', type='Normal') {
//         super();

//         this.type = '';

//         this.state = {
//             nameEn: nameEn,
//             imgUrl: '',
//             selected: false

//         };
//         this.selected = this.selected.bind(this);
//       }

//       selectCard(index){
//           let isAlreadyActive = index === this.state.selected;
//           this.setState({selected: isAlreadyActive ? false : true })
//       }



//       render(){
//         return(

//             <Card sx={{ maxWidth: 345 }}>
//             <CardMedia
//               component="img"
//               alt={this.name}
//               height="140"
//               image={this.imgUrl}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {this.name}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Lorem ispum
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small">Share</Button>
//               <Button size="small">Learn More</Button>
//             </CardActions>
//           </Card>

//         );

//       }
// }

// export default PokemonCard;
