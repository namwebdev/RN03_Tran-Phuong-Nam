import React from 'react';
import {View, TextInput, FlatList, StyleSheet} from 'react-native';
import {BackgroundView, Text} from '../../components';
import {connect} from 'react-redux';
import PopularGameItem from './components/PopularGameItem';
import LiveGameItem from './components/LiveGameItem';
import {COLORS, FONT_SIZE, GAP} from '../../themes/styles';
import AntIcon from 'react-native-vector-icons/AntDesign';

function Stream({listGame}) {
  return (
    <BackgroundView edges={['top']}>
      <View style={styles.container}>
        <>
          <Text title style={styles.headerText}>
            Streaming
          </Text>
          <View>
            <TextInput
              placeholder="Search here..."
              placeholderTextColor={COLORS.opacityWhite}
              style={styles.search}
            />
            <AntIcon
              style={styles.searchIcon}
              name="search1"
              color={COLORS.white}
              size={25}
            />
          </View>
        </>

        <View style={styles.popularGameContainer}>
          <Text style={styles.marginTitle}>Popular Games</Text>
          <FlatList
            data={listGame}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <PopularGameItem game={item} />}
            ItemSeparatorComponent={() => <View style={{width: 20}} />}
            contentContainerStyle={{paddingBottom: 40}}
          />
        </View>

        <>
          <View style={[styles.liveGamesTitle, styles.marginTitle]}>
            <Text title style={[styles.marginBottom, {fontSize: FONT_SIZE.lg}]}>
              Live Games
            </Text>
            <Text style={styles.viewAllBtn} color={COLORS.lightPurple}>
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
  container: {
    paddingTop: 20,
    paddingHorizontal: GAP,
  },
  marginTitle: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: FONT_SIZE.xxl,
    marginBottom: 15,
  },
  popularGameContainer: {
    marginTop: 20,
  },
  liveGamesTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    backgroundColor: COLORS.darkGray,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    paddingRight: 40,
    color: COLORS.white,
  },
  searchIcon: {position: 'absolute', top: 8, right: 10},
  viewAllBtn: {
    fontSize: FONT_SIZE.xs,
  },
});
