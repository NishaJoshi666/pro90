import * as React from 'react';
import { ScrollView,Text,View
} from 'react-native';
import { DataTable } from 'react-native-paper';

const MyComponent = () => (
<DataTable>
<ScrollView>
    <View style={{justifyContent:'center',backgroundColor:'blue'}}>
    <Text style={{fontSize:25,justifyContent:'center',marginLeft:65,color:'#fff'}}>GENERAL INTRO-1</Text>
    </View>
    <DataTable.Header>
      <DataTable.Title>Words</DataTable.Title>
      <DataTable.Title numeric>Meaning</DataTable.Title>
    </DataTable.Header>


    <DataTable.Row>
      <DataTable.Cell>1. I</DataTable.Cell>
      <DataTable.Cell numeric>अहम्(aham)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>2. We</DataTable.Cell>
      <DataTable.Cell numeric>वयम्(vayam)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>3. You(Singular)</DataTable.Cell>
      <DataTable.Cell numeric>त्वम्(tvam)</DataTable.Cell>
    </DataTable.Row>


     <DataTable.Row>
      <DataTable.Cell>4. You(Plural)</DataTable.Cell>
      <DataTable.Cell numeric>युयम्(yuyam)</DataTable.Cell>
    </DataTable.Row>


     <DataTable.Row>
      <DataTable.Cell>5. He</DataTable.Cell>
      <DataTable.Cell numeric>सः(saha),एषः(eshaha)</DataTable.Cell>
    </DataTable.Row>


     <DataTable.Row>
      <DataTable.Cell>6. She</DataTable.Cell>
      <DataTable.Cell numeric>सा(saa),एषा(eshaa)</DataTable.Cell>
    </DataTable.Row>


     <DataTable.Row>
      <DataTable.Cell>7. It</DataTable.Cell>
      <DataTable.Cell numeric>तत्(tat)</DataTable.Cell>
    </DataTable.Row>


     <DataTable.Row>
      <DataTable.Cell>8. They(Masculine)</DataTable.Cell>
      <DataTable.Cell numeric>ते(te)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>9. They(Feminine)</DataTable.Cell>
      <DataTable.Cell numeric>ताः(taaha)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>10. They(Neuter)</DataTable.Cell>
      <DataTable.Cell numeric>तानि(taani)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>11. Who(Masculine)</DataTable.Cell>
      <DataTable.Cell numeric>कः(kaha)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>12. Who(Feminine)</DataTable.Cell>
      <DataTable.Cell numeric>का(kaa)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>13. What</DataTable.Cell>
      <DataTable.Cell numeric>किम्(kim)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>14. When</DataTable.Cell>
      <DataTable.Cell numeric>कदा(kada)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>15. Why</DataTable.Cell>
      <DataTable.Cell numeric>किमर्थं(kimartham)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>16. Where</DataTable.Cell>
      <DataTable.Cell numeric>कुत्र(kutra)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>17. From-where</DataTable.Cell>
      <DataTable.Cell numeric>कुतः(kutah)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>18. How</DataTable.Cell>
      <DataTable.Cell numeric>कथम्(katham)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>19. How much</DataTable.Cell>
      <DataTable.Cell numeric>कति(kati)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>20. You(Masculine)</DataTable.Cell>
      <DataTable.Cell numeric>भवान्(bhavaan)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>21. You(Feminine)</DataTable.Cell>
      <DataTable.Cell numeric>भवति(bhavati)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>22. Yes</DataTable.Cell>
      <DataTable.Cell numeric>आम्(aam)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>23. No</DataTable.Cell>
      <DataTable.Cell numeric>न(na)</DataTable.Cell>
    </DataTable.Row>


    <Text style={{fontSize:20,color:'red'}}>SOME SENTENCES USING ABOVE TERMS-</Text>
    
    <Text style={{fontSize:15}}>1. एषः कः?(eshaha kaha?) - Who is he?</Text>
    
    <Text style={{fontSize:15}}>2. सः अलेक्षः(eshaha Alexaha) - He is Alex</Text>
    
    <Text style={{fontSize:15}}>3. एषा का?(eshaa kaha?),सा का?(saa kaha) - Who is she?</Text>
    
    <Text style={{fontSize:15}}>4. एषा रीटा(eshaa Reetaa),सा रीटा(saa Reetaa) - She is Reeta</Text>
    
    <Text style={{fontSize:15}}>5. सः कदा गच्छति?(saha kaha gacchati?) - When does he go?</Text>
    
    <Text style={{fontSize:15}}>6. सः किमर्थं तत्र गच्छति?(saha kimartham tatra gacchati?) - When does he go?</Text>
    
    <Text style={{fontSize:15}}>7. सः कुतः आगतवान्?(saha kutah aagatavaan?) - Where did he come from?</Text>
    
    <Text style={{fontSize:15}}>8. सः कुत्रः गतवान्?(saha kutra gatavaan?) - Where did he go?</Text>
    
    <Text style={{fontSize:15}}>9. भवान् कथम् अस्ति?(bhavaan katham asti?) - How are you?</Text>
    
    <Text style={{fontSize:15}}>10. अहम् पठामि(aham pathaami) - I read.</Text>
    
    <Text style={{fontSize:15}}>11. अहम् न पठामि(aham na pathaami) - I don't read.</Text>
    
    <Text style={{fontSize:15}}>12. आम् अहम् पठामि(aam aham pathaami) - I do read.</Text>
    
    <Text style={{fontSize:15}}>13. अहम् गच्छमि(aham gacchami) - I go.</Text>
    
    
    <Text style={{fontSize:15}}>14. वयम् गच्छामः(vayam gacchamaha) - We go.</Text>
    
    <Text style={{fontSize:15}}>15. त्वम् गच्छसि(tvam gacchasi) - You(Singular) go.</Text>
    
    <Text style={{fontSize:15}}>16. युयम् गच्छथ(yuyam gacchatha) - You(Plural) go.</Text>
    
    <Text style={{fontSize:15}}>17. सः गच्छति(sah gacchati) - He goes.</Text>
    
    <Text style={{fontSize:15}}>18. सा गच्छति(saa gacchati) - She goes.</Text>
    
    <Text style={{fontSize:15}}>19. तत् गच्छति(tat gacchati) - It goes.</Text>
    
    <Text style={{fontSize:15}}>20. ते गच्छन्ति(te gacchanti) - They(Masculine) go.</Text>
    
    <Text style={{fontSize:15}}>21. ताः गच्छन्ति(taaha gacchanti) - They(Feminine) go.</Text>
    
    <Text style={{fontSize:15}}>22. तानि गच्छन्ति(taani gacchanti) - They(Neuter) go. </Text>


</ScrollView>
  </DataTable>
);

export default MyComponent;