import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import {getRequestGameDetail} from '../../redux/thunks/gameThunkActions';
import {BackgroundView, Text} from '../../components';
import styles from './styles.detail';
import {COLORS} from '../../themes/styles';
import AntIcon from 'react-native-vector-icons/AntDesign';

function Detail(props) {
  const {route, game, navigation, isFetching, getRequestGameDetail} = props;
  useEffect(() => {
    const id = route.params.id;
    getRequestGameDetail(id);
  }, []);

  if (isFetching)
    return (
      <BackgroundView edges={['bottom']}>
        <Text title>Loading...</Text>
      </BackgroundView>
    );

  return (
    <BackgroundView edges={['bottom']}>
      <Image source={{uri: game.preview[0]}} style={styles.bannerContainer} />
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

const mapStateToProps = state => ({
  game: state.gameReducer.gameDetail,
  isFetching: state.gameReducer.isFetching,
});

const mapDispatchToProps = dispatch => ({
  getRequestGameDetail: id => dispatch(getRequestGameDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
