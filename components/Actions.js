import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text,Alert } from 'react-native';
import { ListItem, Button, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

const Actions = () => {

  const actions = useSelector(state => state.actions);
  console.log(actions);

  return(
    <View style={{flex:1}}>
      
        <Button
        title="테스트 결과 (Click)"
        onPress={() => { Alert.alert(
          "행복해서 웃는게 아니라 \n 웃어서 행복한 겁니다 ^ㅡ^") }} />

      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        actions.map((item, i) => (
          <ListItem containerStyle={{width:"100%"}} key={i}>
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
      
      </ScrollView>
      <Text style={{ marginBottom : 500, margin:40 }}>
      💛건강지수💛{"\n"}
      표준체중{"\n"}
      남자: 키(m) x 키(m) x 22{"\n"}
      여자: 키(m) x 키(m) x 21{"\n"}
      비만도{"\n"}
      현재체중-표준체중 / 표준체중 x 100(%){"\n"}
      +-10% : 정상{"\n"}
      10~20% : 과다체중{"\n"}
      +20% : 비만{"\n"}
      빠른 계산법 : 키(cm) - 100~110 = 정상(kg)
      
{"\n"}{"\n"}
♥행복지수♥{"\n"} 7개 이상 :  당신은 매우 사교적이며 행복한 사람입니다.{"\n"}
4개 : 당신은 생활이 매우 유쾌한 상태는 아니어보여요.{"\n"} 앞으로 긍정 에너지를 더욱 발산해보길!{"\n"}
0~3개 : 당신은 지금 상당히 의기소침해 있는 사람입니다.{"\n"} 항상 웃으려 노력하고 힘을 내보아요 화이팅!!!
{"\n"}{"\n"}
💜스트레스지수💜{"\n"} 7개 이상 : 스트레스지수가 매우높은것으로 간주, 하루빨리 쌓인 스트레스를 해소시킬 필요가 있습니다!{"\n"}
4개 이상 : 적당한 스트레스보다 약간더 받고계시네요.{"\n"} 미소를 띄어봅시다!{"\n"}
0~3개 : 당신은 왠만하면 긍정인~! </Text>
    
    </View>
  )
}

export default Actions;