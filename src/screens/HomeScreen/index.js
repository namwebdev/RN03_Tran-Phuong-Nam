import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, FlatList} from 'react-native';
import {getRequestListGame} from '../../redux/thunks/gameThunkActions';
import {BackgroundView, Text, GameItem} from '../../components';
import {COLORS} from '../../themes/styles';

function Home({listGame, getRequestListGame}) {
  useEffect(() => {
    getRequestListGame();
  }, []);

  return (
    <BackgroundView edges={['top']}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerText}>
            Hello <Text style={styles.fontBold}>CyberSoft</Text>
          </Text>
        </View>
        <View style={styles.avatar}></View>
      </View>

      <FlatList
        data={listGame}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <GameItem game={item} />}
        ItemSeparatorComponent={() => <View style={{height: 70}} />}
        contentContainerStyle={{ paddingBottom: 100}}
      />
    </BackgroundView>
  );
};

const mapStatesToProps = state => ({
  listGame: state.gameReducer.listGame,
  isFetching: state.gameReducer.isFetching,
});

const mapDispatchToProps = dispatch => ({
  getRequestListGame: () => dispatch(getRequestListGame()),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 30,
  },
  fontBold: {
    fontWeight: '800',
  },
  avatar: {
    backgroundColor: COLORS.lightPurple,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
