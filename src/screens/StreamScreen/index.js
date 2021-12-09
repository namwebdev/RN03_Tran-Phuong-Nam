import React from 'react';
import {View, TextInput, FlatList, StyleSheet} from 'react-native';
import {BackgroundView, Text} from '../../components';
import {connect} from 'react-redux';
import PopularGameItem from './components/PopularGameItem';
import LiveGameItem from './components/LiveGameItem';
import {COLORS, GAP} from '../../themes/styles';

function Stream({listGame}) {
  return (
    <BackgroundView edges={['top']}>
      <Text title>Streaming</Text>
      <TextInput />

      <View style={{paddingHorizontal: GAP}}>
        <>
          <Text style={styles.marginTitle}>Popular Games</Text>
          <FlatList
            data={listGame}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <PopularGameItem game={item} />}
            ItemSeparatorComponent={() => <View style={{width: 20}} />}
            contentContainerStyle={{paddingBottom: 40}}
          />
        </>

        <>
          <View style={[styles.liveGamesTitle, styles.marginTitle]}>
            <Text title>Live Games</Text>
            <Text subTitle color={COLORS.lightPurple}>
              View All
            </Text>
          </View>

          <FlatList
            data={listGame}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <LiveGameItem game={item} />}
            ItemSeparatorComponent={() => <View style={{height: 20}} />}
            contentContainerStyle={{paddingBottom: 260}}
          />
        </>
      </View>
    </BackgroundView>
  );
}

const mapStateToProps = state => ({
  listGame: state.gameReducer.listGame,
  isFetching: state.gameReducer.isFetching,
});

export default connect(mapStateToProps)(Stream);

const styles = StyleSheet.create({
  marginTitle: {
    marginBottom: 10,
  },
  liveGamesTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
