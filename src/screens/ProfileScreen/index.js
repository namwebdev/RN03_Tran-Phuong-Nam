import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Avatar, BackgroundView, Text} from '../../components';
import {COLORS, FONT_SIZE, GAP} from '../../themes/styles';
import PurchaseGameItem from './components/PurchaseGameItem';

function Profile({listGame}) {
  return (
    <BackgroundView edges={['top']}>
      <View style={styles.topContainer}>
        <Avatar size={100} />
        <Text title style={styles.headerText}>CyberSoft</Text>

        <View style={styles.tagContainer}>
          <View style={[styles.tag, {backgroundColor: COLORS.lightPurple}]}>
            <Text title>Pro Gamer</Text>
          </View>
          <View style={[styles.tag, {backgroundColor: COLORS.lightYellow}]}>
            <Text title color={'black'}>
              Pro Coder
            </Text>
          </View>
        </View>

        <View style={styles.tagContainer}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end', height: 30}}>
            <Text style={styles.numberTitle} title>
              250
            </Text>
            <Text color={COLORS.gray}> Games</Text>
          </View>
          <View style={{width: 20}}></View>
          <View style={{flexDirection: 'row', alignItems: 'flex-end', height: 30}}>
            <Text style={styles.numberTitle} title>
              {listGame.length}
            </Text>
            <Text color={COLORS.gray}> Purchase</Text>
          </View>
        </View>
      </View>

      <View style={{paddingHorizontal: GAP}}>
        <Text style={styles.purchaseGameTitle} color={COLORS.gray}>Puchased Games</Text>
        <FlatList
          data={listGame}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <PurchaseGameItem game={item} />}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          contentContainerStyle={{paddingBottom: 360}}
        />
      </View>
    </BackgroundView>
  );
}

const mapStateToProps = state => ({
  listGame: state.gameReducer.listGame,
});

export default connect(mapStateToProps)(Profile);

const styles = StyleSheet.create({
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: FONT_SIZE.lg,
    marginTop: 10,
    marginBottom: 15,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  tag: {
    marginHorizontal: 8,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  numberTitle: {
    fontSize: FONT_SIZE.xl,
  },
  purchaseGameTitle: {
    fontSize: FONT_SIZE.lg,
    textAlign: 'center',
    marginBottom: 20,
  }
});
