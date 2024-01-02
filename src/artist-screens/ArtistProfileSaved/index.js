import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header } from '../../components';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you want to use FontAwesome icons, you can change it to any other supported icon library.
import { useSelector } from 'react-redux';

const whatsappphone = require('../../assets/whatsappphone.png');
const theme = useTheme();

export default function ArtistProfileSaved(props) {
  const { userProfileDetails } = useSelector(state => state.auth);

  const editClickHandler = () => {
    props.navigation.navigate('ArtistPersonalDetails');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn titleShadow />
      <ScrollView>
        <Text style={styles.heading}>Personal Details</Text>
        <View style={styles.personalMain}>
          <View style={styles.personalContainer}>
            <View style={{ paddingLeft: widthToDp(4) }}>
              <Text style={styles.subheading}>Name</Text>
              <Text style={styles.infoText}>{userProfileDetails.name}</Text>
            </View>
            <View>
              <TouchableOpacity activeOpacity={0.7} onPress={editClickHandler} style={{ padding: heightToDp(2.9) }}>
                <Icon name={'pencil'} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.personalContainer}>
            <View style={{ paddingLeft: widthToDp(4) }}>
              <Text style={styles.subheading}>Email</Text>
              <Text style={styles.infoText}>{userProfileDetails.email}</Text>
            </View>
            <View>
              <TouchableOpacity activeOpacity={0.7} onPress={editClickHandler} style={{ padding: heightToDp(2.9) }}>
                <Icon name={'pencil'} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.personalContainer}>
            <View style={{ paddingLeft: widthToDp(4) }}>
              <Text style={styles.subheading}>Mobile Number</Text>
              <Text style={styles.infoText}>{userProfileDetails.phone_number ?? '0000-00000000'}</Text>
            </View>
            <View>
              <TouchableOpacity activeOpacity={0.7} onPress={editClickHandler} style={{ padding: heightToDp(2.9) }}>
                <Icon name={'pencil'} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.personalContainer}>
            <View style={{ paddingLeft: widthToDp(4) }}>
              <Text style={[styles.subheading]}>Your default address</Text>
              <Text style={[{ width: widthToDp(54) }, styles.infoText]}>{userProfileDetails.default_address}</Text>
            </View>
            <View>
              <TouchableOpacity activeOpacity={0.7} onPress={editClickHandler} style={{ padding: heightToDp(2.9) }}>
                <Icon name={'pencil'} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.headingtxt}>
          To update your email address please contact Kaynchi customer support and they will help you out.
        </Text>

        <Button
          title={'Whatsapp Kyanchi'}
          btnStyle={[styles.btn, { marginTop: heightToDp(10), backgroundColor: '#668C6A' }]}
          image={whatsappphone}
          imageStyle={styles.iconStyles}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
