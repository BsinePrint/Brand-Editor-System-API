// const axios = require('axios')
// const url = 'http://localhost:3000/api/consorcios'
// const data = {
//   token_rdstation: '70ed395a56195295cf8b099395d14410',
//   identificador: 'parceiros-db',
//   _is: '6',
//   redirect_to: 'http://consorciocred.com',
//   c_utmz: '',
//   traffic_source: 'Outros',
//   client_id: '',
//   thankyou_message: 'Obrigado!!!',
//   // name: 'Nome do SUIssa',
//   email: 'jnascimento@TESTENODE.com',
//   company: 'Parceiros',
//   job_title: 'Parceiro APROVADO',
//   // "custom_fields[386929]": '12345678901', // cpf
//   // personal_phone: '15 991135823',
//   // twitter: '@osuissa',
// }

// const csvFilePath='./data_test.csv'
// const csv = require('csvtojson')

// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{
//     // console.log(jsonObj);
//   const list = jsonObj.map(u => ({...u, Telefone_: u.telefone, Celular_: u.celular}))
//   // console.log({list});

//   list.forEach(async (user, i) => {
//     data.email = user.email
//     data.firstname = user.firstname
//     data.lastname = user.lastname
//     // data.status_date = user.status_date
//     // data.personal_phone = user.Celular_
//     // data.Telefone_ = user.Telefone_
//     // data.Celular_ = user.Celular_
//     data.name = `${user.firstname} ${user.lastname}`
//     data.client_id = i
//     data.id = i
//     data.tags = "parceiros aprovados"

//     console.log('\n\n\n', {data});

//     try {
//       // setTimeout(function(){ console.log("Testando " + i); }, 100000);
//       const response = await axios.post(url, data)
//       console.log("\n\n ENVIOU!")
//       console.log(i + ' - then: ', response.data)
  
      
//     } catch (error) {
//       console.log("\n\n ERROR!")
//       console.log({error})
//     }
//   })

// })
// // router.post('/', (req, res) => {
// //   const {
// //     name,
// //     email,
// //     phone,
// //     cellphone,
// //     reference,
// //     consortium_id,
// //     identificador,
// //     price_total, price_entry, plots
// //   } = req.body

// //   data.name = name
// //   data.email = email
// //   data.phone = phone
// //   data.cellphone = cellphone
// //   data.reference = reference
// //   data.consortium_id = consortium_id
// //   data.price_total = price_total
// //   data.price_entry = price_entry
// //   data.plots = plots
// //   data.identificador = identificador

// //   axios.post(url, data)
// //   .then(function (response) {
// //     console.log('then: ', response.data)
// //     res.json(true)
// //   })
// //   .catch(function (error) {
// //     console.log({error})
// //     res.json(false)
// //   })

// // })

