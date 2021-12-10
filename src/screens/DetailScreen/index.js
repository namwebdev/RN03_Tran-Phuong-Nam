import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import {getRequestGameDetail} from '../../redux/thunks/gameThunkActions';
import {BackgroundView, Text} from '../../components';
import styles from './styles.detail';
import {COLORS} from '../../themes/styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {
  getGameDetailSelector,
  getIsFetchSelector,
} from '../../redux/selectors/game.selector';

export default function Detail({route, navigation}) {
  const dispatch = useDispatch();
  const game = useSelector(getGameDetailSelector);
  const isFetching = useSelector(getIsFetchSelector);

  useEffect(() => {
    const id = route.params.id;
    dispatch(getRequestGameDetail(id));
  }, []);

  if (isFetching)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );

  return (
    <BackgroundView edges={['bottom']}>
      {game.preview && (
        <Image source={{uri: game.preview[0]}} style={styles.bannerContainer} />
      )}
      <TouchableOpacity
        style={styles.iconBack}
        onPress={() => navigation.goBack()}>
        <AntIcon name="close" color={COLORS.white} size={30} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <View style={styles.topInfoContent}>
          <Image source={{uri: game.icon}} style={styles.iconGame} />
          <View style={styles.topInfoTextContent}>
            <Text title>{game.title}</Text>
            <Text subTitle>{game.subTitle}</Text>
          </View>
          <View style={styles.downloadIcon}>
            <AntIcon name="clouddownloado" color={COLORS.white} size={30} />
          </View>
        </View>
        <View style={styles.botInfoContent}>
          {/* <View style={styles.starContent}>{renderStar()}</View> */}
          <Text>{game.age}</Text>
          <Text>Game for the day</Text>
        </View>
      </View>
      <View style={styles.previewContainer}>
        <FlatList
          snapToInterval={350}
          decelerationRate="fast"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingRight: 15}}
          style={styles.listPreview}
          data={game.preview}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={styles.previewItem} />
          )}
          ItemSeparatorComponent={() => <View style={{width: 30}} />}
        />
        <Text subTitle>{game.description}</Text>
      </View>
    </BackgroundView>
  );
}
