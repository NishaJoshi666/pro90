import * as React from 'react';
import { ScrollView,Text,View } from 'react-native';
import { DataTable } from 'react-native-paper';

const MyComponent = () => (
<DataTable>
<ScrollView>
  <View style={{justifyContent:'center',backgroundColor:'blue'}}>
    <Text style={{fontSize:25,justifyContent:'center',marginLeft:65,color:'#fff'}}>GENERAL INTRO-2</Text>
    </View>
    <DataTable.Header>
      <DataTable.Title>Words</DataTable.Title>
      <DataTable.Title numeric>Meaning</DataTable.Title>
    </DataTable.Header>


    <DataTable.Row>
      <DataTable.Cell>1. हरीः ऊँ</DataTable.Cell>
      <DataTable.Cell numeric>रामराम(Hello)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>2. नमस्कारः</DataTable.Cell>
      <DataTable.Cell numeric>नमस्कार(Hi,Hello)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>3. सुप्रभातंः</DataTable.Cell>
      <DataTable.Cell numeric>सुप्रभात(Good Morning)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>4. पुनर्मिलामः</DataTable.Cell>
      <DataTable.Cell numeric>फिर मिलेंगे(See You)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>5. शुभरात्रिः</DataTable.Cell>
      <DataTable.Cell numeric>शुभरात्रि(Good Night)</DataTable.Cell>
    </DataTable.Row>

    
    <DataTable.Row>
      <DataTable.Cell>6. श्रीमान्</DataTable.Cell>
      <DataTable.Cell numeric>श्रीमान्(Mr)</DataTable.Cell>
    </DataTable.Row>

    
    <DataTable.Row>
      <DataTable.Cell>7. क्षम्यतां</DataTable.Cell>
      <DataTable.Cell numeric>क्षमा कीजिये(Pardon)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>8. चिन्ता मास्तु</DataTable.Cell>
      <DataTable.Cell numeric>चिंता नही(Don't Worry)</DataTable.Cell>
    </DataTable.Row>


     <DataTable.Row>
      <DataTable.Cell>9. धन्यवाद</DataTable.Cell>
      <DataTable.Cell numeric>आभार(Thanks)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>10. स्वागतं</DataTable.Cell>
      <DataTable.Cell numeric>स्वागत हो(Pardon)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>11. उत्तमं</DataTable.Cell>
      <DataTable.Cell numeric>उत्तम(Pardon)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>12. </DataTable.Cell>
      <DataTable.Cell numeric>क्षमा कीजिये(Pardon)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>13. </DataTable.Cell>
      <DataTable.Cell numeric>क्षमा कीजिये(Pardon)</DataTable.Cell>
    </DataTable.Row>


</ScrollView>
  </DataTable>
);

export default MyComponent;